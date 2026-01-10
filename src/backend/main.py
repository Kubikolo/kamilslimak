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
            "points": {}
        })

        print(f"Użytkownik stworzony z UID: {uid}")
        return uid

    except Exception as e:
        print("Błąd przy tworzeniu użytkownika:", e)
        return None


def create_business(name, email, password):
    try:
        user = auth.create_user_with_email_and_password(email, password)
        uid = user['localId']
        db.child("businesses").child(uid).set({
            "name": name,
            "mail": email,
            "offers": {},
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

def read_client_info(client_id):
    refrence = db.child("users").child(client_id)
    if not refrence.get().val():
        print("Nie znaleziono użytkownika o podanym id: ", client_id)
        return
    return refrence.get().val()

def read_bussines_info(bussines_id):
    refrence = db.child("businesses").child(bussines_id)
    if not refrence.get().val():
        print("nie znaleziono biznesu o id: ", bussines_id)
        return

    return refrence.get().val()

def read_client_points_list(client_id):
    temp_list = db.child("users").child(client_id).child("points").get().val() or dict()
    return_list = dict()
    for business_uid in temp_list:
        business_name = db.child("businesses").child(business_uid).child("name").get().val()
        return_list[business_name] = temp_list[business_uid]

    return return_list


def read_business_offer_info(bussines_id):
    refrence = db.child("businesses").child(bussines_id).child("offers")
    if not refrence.get().val():
        print("nie znaleziono ofert dla biznesu o id: ", bussines_id)
        return
    return refrence.get().val()


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
    if not offer_ref.get().val():
        print("nie znaleziono oferty")
        return

    offer_ref.update({
        "name": new_name,
        "description": new_description,
        "price": new_price,
        "image": new_image,
        "add_points": new_add_points,
        "cost_points": new_cost_points
    })
    print("zmieniono oferte o id: ", offer_id)




def add_points(client_id, busines_id, offer_id):
    offer = db.child("businesses").child(busines_id).child("offers").child(offer_id).get().val()
    if not offer:
        return

    point_number = offer.get("add_points", 0)

    curr_points = db.child("users").child(client_id).child("points").child(busines_id).get().val() or 0
    curr_points += point_number
    db.child("users").child(client_id).child("points").update({busines_id: curr_points})
    print(f"Dodano {point_number} punktów dla klienta {client_id} w biznesie {busines_id}")


############
# DELETE
############

if __name__ == '__main__':
    pass
    client_uid = create_user(
        "ewa@example.com",
        "tajne123",
        "Ewa"
    )

    business_uid = create_business(
        "Kawiarnia Ewa",
        "kawiarnia@example.com",
        "biznes123"
    )

    offer_id = create_offer(
        business_id=business_uid,
        name="Kawa Latte",
        description="Latte z mlekiem owsianym",
        price=16.0,
        image="https://example.com/latte.jpg",
        add_points=5,
        cost_points=50
    )

    add_points(client_uid, business_uid, offer_id)

    print(read_client_points_list(client_uid))

