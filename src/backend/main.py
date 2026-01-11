import os
from dotenv import load_dotenv
import pyrebase
from uuid import uuid4

load_dotenv()

def create_connection():
    config = {
        "apiKey": os.getenv("API_KEY"),
        "authDomain": os.getenv("AUTH_DOMAIN"),
        "databaseURL": os.getenv("DATABASE_URL"),
        "projectId": os.getenv("PROJECT_ID"),
        "storageBucket": os.getenv("STORAGE_BUCKET"),
        "messagingSenderId": os.getenv("MESSAGING_SENDER_ID"),
        "appId": os.getenv("APP_ID"),
        "measurementId": os.getenv("MEASUREMENT_ID")
    }

    firebase = pyrebase.initialize_app(config)
    return firebase


##################
# CRUD
##################


firebase = create_connection()
db = firebase.database()
auth = firebase.auth()

##########
# CREATE
##########

def create_user(email, password, username):
    try:
        user = auth.create_user_with_email_and_password(email, password)
        uid = user['localId']
        db.child("users").child(uid).set({
            "username": username,
            "email": email,
            "points": {},
        })

        print(f"Użytkownik stworzony z UID: {uid}")
        return uid

    except Exception as e:
        print("Błąd przy tworzeniu użytkownika:", e)
        return None


def create_business(name, email, password, icon,
                    location, street, buildingNr,
                    localNr, phone, postalCode,
                    ):
    try:
        user = auth.create_user_with_email_and_password(email, password)
        uid = user['localId']
        db.child("businesses").child(uid).set({
            "name": name,
            "mail": email,
            "offers": {},
            "icon": icon,
            "location":location, ### LOCATION TO CITY PAMIĘTAJ BŁAGAM
            "street":street,
            "building_nr":buildingNr,
            "local_nr":localNr,
            "phone":phone,
            "postalCode":postalCode
        })
        print(f"Biznes stworzony z UID: {uid}")
        return uid
    except Exception as e:
        print("Błąd przy tworzeniu biznesu:", e)
        return None


def create_offer(business_id, name, description, price, image, add_points, cost_points):
    offer_id = uuid4()
    db.child("businesses").child(business_id).child("offers").child(offer_id).set({
        "name": name,
        "description": description,
        "price": price,
        "image": image,
        "add_points": add_points,
        "cost_points": cost_points
    })
    print(f"Oferta {name} dodana do biznesu {business_id}")
    return offer_id



##########
# READ
##########

def read_login(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        uid = user['localId']
        print(f"Zalogowano użytkownika {email} z UID: {uid}")
        return uid
    except Exception as e:
        print("Błąd logowania:", e)
        return None


def read_business_login(email, password):
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        uid = user["localId"]

        business = db.child("businesses").child(uid).get().val()
        if not business:
            return None

        return uid
    except:
        return None

def read_client_info(client_id):
    data = db.child("users").child(client_id).get().val()
    if not data:
        print("Nie znaleziono użytkownika o id:", client_id)
        return None
    return data

def read_client_favorited_businesses(client_id):
    data = db.child("users").child(client_id).child("favorite_businesses").get().val()
    if not data:
        print("Nie ma polubionych")
        return
    return data

def read_client_shopping_cart(client_id):
    data = db.child("users").child(client_id).child("shopping_cart").get().val()
    if not data:
        print("klient nie ma koszyka")
        return dict()
    return data

def read_businesses():
    refrence = db.child("businesses")
    temp_list = refrence.get().val()
    if not refrence.get().val():
        return {}

    return_list = dict()
    for business_uid in temp_list:
        return_list[business_uid] = {
            "name": temp_list[business_uid].get("name"),
            "icon": temp_list[business_uid].get("icon"),
        }
    return return_list

def read_bussines_info(bussines_id):
    data = db.child("businesses").child(bussines_id).get().val()
    if not data:
        print("Nie znaleziono biznesu o id:", bussines_id)
        return None
    return data

def read_client_points_list(client_id):
    temp_list = db.child("users").child(client_id).child("points").get().val() or dict()
    return_list = dict()
    for business_uid in temp_list:
        business_name = db.child("businesses").child(business_uid).child("name").get().val()
        return_list[business_name] = temp_list[business_uid]

    return return_list


def read_bussines_offer_info(bussines_id):
    data = db.child("businesses").child(bussines_id).child("offers").get().val()
    if not data:
        print("Brak ofert dla biznesu:", bussines_id)
        return {}
    return data


##########
# UPDATE
#########

def update_offer(
        bussines_id,
        offer_id,
        new_name,
        new_price,
        new_image,
        new_description,
        new_add_points,
        new_cost_points
    ):
    offer_ref = db.child("businesses").child(bussines_id).child("offers").child(offer_id)

    current_offer = offer_ref.get().val()
    if not current_offer:
        print("nie znaleziono oferty")
        return False

    update_data = {}

    if new_name is not None:
        update_data["name"] = new_name
    if new_description is not None:
        update_data["description"] = new_description
    if new_price is not None:
        update_data["price"] = new_price
    if new_image is not None:
        update_data["image"] = new_image
    if new_add_points is not None:
        update_data["add_points"] = new_add_points
    if new_cost_points is not None:
        update_data["cost_points"] = new_cost_points

    if not update_data:
        print("brak danych do aktualizacji")
        return False

    offer_ref.update(update_data)
    print("zmieniono oferte o id:", offer_id)
    return True


def add_to_shopping_cart(client_id, business_id, offer_id):
    data = db.child("users").child(client_id).child("shopping_cart").get().val()
    if not data:
        db.child("users").child(client_id).child("shopping_cart").set({offer_id:business_id})
        return

    db.child("users").child(client_id).child("shopping_cart").update({offer_id:business_id})


def add_points(client_id, busines_id, offer_id):
    offer = db.child("businesses").child(busines_id).child("offers").child(offer_id).get().val()
    if not offer:
        return

    point_number = offer.get("add_points", 0)

    curr_points = db.child("users").child(client_id).child("points").child(busines_id).get().val() or 0
    curr_points += point_number
    db.child("users").child(client_id).child("points").update({busines_id: curr_points})
    print(f"Dodano {point_number} punktów dla klienta {client_id} w biznesie {busines_id}")


def update_bussines_info(
        bussines_id,
        new_name=None,
        new_icon=None,
        new_location=None,
        new_street=None,
        new_building_nr=None,
        new_local_nr=None,
        new_postal_code=None,
        new_phone=None
):
    current_data = db.child("businesses").child(bussines_id).get().val()
    if not current_data:
        print("nie znaleziono biznesu:", bussines_id)
        return False

    update_data = {}

    if new_name is not None:
        update_data["name"] = new_name
    if new_icon is not None:
        update_data["icon"] = new_icon
    if new_location is not None:
        update_data["location"] = new_location
    if new_street is not None:
        update_data["street"] = new_street
    if new_building_nr is not None:
        update_data["building_nr"] = new_building_nr
    if new_local_nr is not None:
        update_data["local_nr"] = new_local_nr
    if new_postal_code is not None:
        update_data["postalCode"] = new_postal_code
    if new_phone is not None:
        update_data["phone"] = new_phone

    if update_data:
        db.child("businesses").child(bussines_id).update(update_data)

    return True

def add_favorite_business(user_id, business_id):
    db.child("users").child(user_id).child("favorite_businesses").update({business_id: True})
    print(f"Dodano biznes {business_id} do ulubionych użytkownika {user_id}")
    return True

############
# DELETE
############

def remove_favorite_business(user_id, business_id):
    db.child("users").child(user_id).child("favorite_businesses").child(business_id).remove()
    print(f"Usunięto biznes {business_id} z ulubionych użytkownika {user_id}")
    return True

def remove_offer(business_id, offer_id):
    if not db.child("businesses").child(business_id).child("offers").child(offer_id).get().val():
        print("nie ma oferty dla biznesu która chcesz skasować o id:", offer_id)
        return
    db.child("businesses").child(business_id).child("offers").child(offer_id).remove()

def remove_offer_from_shopping_cart(client_id, offer_id, business_id):
    if not db.child("users").child(user_id).child("shopping_cart").child(offer_id).get().val():
        print("ni mo oferty w koszyko ino hej")
        return
    db.child("users").child(user_id).child("shopping_cart").child(offer_id).remove()

if __name__ == '__main__':
    print("===== MOCK DATA START =====")

    # ---------- MOCK USER ----------
    user_email = "testuser1@mail.com"
    user_password = "password123"
    username = "TestUser"

    user_id = create_user(
        email=user_email,
        password=user_password,
        username=username
    )

    print("USER ID:", user_id)

    # ---------- MOCK BUSINESS ----------
    business_email = "testbiz1@mail.com"
    business_password = "password123"

    business_id = create_business(
        name="Test Bistro",
        email=business_email,
        password=business_password,
        icon="🍔",
        location="Warszawa",
        street="Testowa",
        buildingNr="12A",
        localNr="3",
        phone="123456789",
        postalCode="00-001"
    )

    print("BUSINESS ID:", business_id)

    # ---------- MOCK OFFERS ----------
    offer1_id = create_offer(
        business_id=business_id,
        name="Burger Classic",
        description="Burger wołowy z serem",
        price=29.99,
        image="burger.png",
        add_points=10,
        cost_points=50
    )

    offer2_id = create_offer(
        business_id=business_id,
        name="Frytki",
        description="Złote frytki 200g",
        price=9.99,
        image="frytki.png",
        add_points=5,
        cost_points=20
    )

    print("OFFER 1:", offer1_id)
    print("OFFER 2:", offer2_id)

    # ---------- ADD TO SHOPPING CART ----------
    add_to_shopping_cart(
        client_id=user_id,
        business_id=business_id,
        offer_id=str(offer1_id)
    )

    add_to_shopping_cart(
        client_id=user_id,
        business_id=business_id,
        offer_id=str(offer2_id)
    )

    # ---------- ADD POINTS ----------
    add_points(
        client_id=user_id,
        busines_id=business_id,
        offer_id=str(offer1_id)
    )

    # ---------- FAVORITE BUSINESS ----------
    add_favorite_business(
        user_id=user_id,
        business_id=business_id
    )

    # ---------- READ TESTS ----------
    print("\n=== READ CLIENT INFO ===")
    print(read_client_info(user_id))

    print("\n=== READ SHOPPING CART ===")
    print(read_client_shopping_cart(user_id))

    print("\n=== READ FAVORITES ===")
    print(read_client_favorited_businesses(user_id))

    print("\n=== READ BUSINESS INFO ===")
    print(read_bussines_info(business_id))

    print("\n=== READ BUSINESS OFFERS ===")
    print(read_bussines_offer_info(business_id))

    print("\n=== READ CLIENT POINTS ===")
    print(read_client_points_list(user_id))

    print("===== MOCK DATA END =====")
