import os
from dotenv import load_dotenv
import pyrebase

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


def create_offer(business_id, offer_id, name, description, price, image, add_points, cost_points):
    db.child("businesses").child(business_id).child("offers").child(offer_id).set({
        "name": name,
        "description": description,
        "price": price,
        "image": image,
        "add_points": add_points,
        "cost_points": cost_points
    })
    print(f"Oferta {name} dodana do biznesu {business_id}")


##########
# READ
##########


def read_client_points_list(client_id):
    temp_list = db.child("users").child(client_id).child("points").get().val()
    return_list = dict()
    for business_uid in temp_list:
        business_name = db.child("businesses").child(business_uid).child("name").get().val()
        return_list[business_name] = temp_list[business_uid]

    return return_list


def read_business_offer_info(bussines_id):
    return db.child("businesses").child(bussines_id).child("offers").get().val()


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

    curr_points = db.child("users").child(client_id).child("points").child(business_id).get().val() or 0
    curr_points += point_number
    db.child("users").child(client_id).child("points").update({business_id: curr_points})
    print(f"Dodano {point_number} punktów dla klienta {client_id} w biznesie {business_id}")


############
# DELETE
############

if __name__ == '__main__':
    pass
    # client_uid = create_user("jan@example.com", "supersecret123", "Janek")
    #
    # business_uid = create_business("Sklep Janek", "sklep@example.com", "biznes123")
    #
    # offer_id = "oferta001"
    # create_offer(
    #     business_id=business_uid,
    #     offer_id=offer_id,
    #     name="Pizza Margherita",
    #     description="Pyszna pizza z mozzarellą i sosem pomidorowym",
    #     price=25.0,
    #     image="https://example.com/pizza.jpg",
    #     add_points=10,
    #     cost_points=100
    # )
    #
    # add_points(client_uid, business_uid, offer_id)
    #
    #
    # client_points = db.child("users").child(client_uid).child("points").child(business_uid).get().val()
    # print(f"Aktualna liczba punktów klienta {client_uid} w biznesie {business_uid}: {client_points}")
    print(read_client_points_list("fR0zS3zHbBUA6AUpx7fFeR4RvoA3"))
