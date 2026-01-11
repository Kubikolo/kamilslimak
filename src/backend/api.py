from flask import Flask, request, jsonify
from main import (
create_user,
create_business,
create_offer,
read_client_points_list,
read_bussines_offer_info,
update_offer,
add_points,
read_login,
read_bussines_info,
read_businesses,
update_bussines_info,
add_favorite_business,
read_client_favorited_businesses,
remove_offer,
read_business_login,
remove_favorite_business,
add_to_shopping_cart,
remove_offer_from_shopping_cart,
read_client_shopping_cart
)

app = Flask(__name__)

@app.route("/create-user", methods=["POST"])
def api_create_user():
    data = request.json
    uid = create_user(data["email"], data["password"], data["username"])
    return jsonify({"uid": uid})

@app.route("/create-business", methods=["POST"])
def api_create_business():
    data = request.json
    uid = create_business(
        email=data["email"],
        password=data["password"],
        name=data["businessName"],  # <--- teraz dopasowane
        phone=data["phone"],
        street=data["street"],
        buildingNr=data["buildingNumber"],
        localNr=data.get("localNumber", ""),
        postalCode=data["postalCode"],
        location=data["city"],
        icon=None
    )
    return jsonify({"uid": uid})

@app.route("/add-points", methods=["POST"])
def api_add_points():
    data = request.json
    add_points(data["client_id"], data["business_id"], data["offer_id"])
    return jsonify({"status": "ok"})

@app.route("/client-points/<client_id>", methods=["GET"])
def api_get_client_points(client_id):
    points = read_client_points_list(client_id)
    return jsonify(points)

@app.route("/favorited_items/<client_id>", methods=["GET"])
def api_read_client_favorited_businesses(client_id):
    return jsonify(read_client_favorited_businesses(client_id))


@app.route("/login", methods=["POST"])
def api_login():
    data = request.json
    uid = read_login(data["email"], data["password"])
    if uid:
        return jsonify({"status": "ok", "uid": uid})
    return jsonify({"status": "error", "message": "Błędny login lub hasło"}), 401


@app.route("/business/login", methods=["POST"])
def api_business_login():
    data = request.json
    uid = read_business_login(data["email"], data["password"])

    if uid:
        return jsonify({"status": "ok", "uid": uid})
    return jsonify({"status": "error"}), 401

@app.route("/business/<bussines_id>", methods=["GET"])
def api_read_bussines_info(bussines_id):
    bussines_info = read_bussines_info(bussines_id)
    return jsonify(bussines_info)

@app.route("/business", methods=["GET"])
def api_read_bussinesses():
    bussines_list = read_businesses()
    return jsonify(bussines_list)


@app.route("/business/<bussines_id>/update", methods=["POST"])
def api_update_bussines_info(bussines_id):
    data = request.json or {}

    success = update_bussines_info(
        bussines_id,
        new_name=data.get("name"),
        new_icon=data.get("icon"),
        new_location=data.get("location"),
        new_street=data.get("street"),
        new_building_nr=data.get("building_nr"),
        new_local_nr=data.get("local_nr"),
        new_postal_code=data.get("postal_code"),
        new_phone=data.get("phone")
    )

    if success:
        return jsonify({"status": "ok"})
    else:
        return jsonify({
            "status": "error",
            "message": "Nie udało się zaktualizować biznesu"
        }), 500

@app.route("/business/<bussines_id>/<offer_id>/update",methods=["POST"])
def api_update_offer_info(bussines_id, offer_id):
    success = update_offer(
        bussines_id,
        offer_id,
        new_name=data.get("name"),
        new_price=data.get("price"),
        new_image=data.get("image"),
        new_description=data.get("description"),
        new_add_points=data.get("add_points"),
        new_cost_points=data.get("cost_points"),
    )

    if success:
        return jsonify({"status": "ok"})
    else:
        return jsonify({
            "status": "error",
            "message": "Nie udało się zaktualizować oferty"
        }), 400

@app.route("/business/<bussines_id>/offer/create", methods=["POST"])
def api_create_offer(bussines_id):
    data = request.json
    offer_id = create_offer(
        bussines_id,
        name=data["name"],
        description=data.get("description"),
        price=data.get("price"),
        image=data.get("image"),
        add_points=data.get("add_points", 0),
        cost_points=data.get("cost_points", 0),
    )
    return jsonify({"offer_id": str(offer_id)})

@app.route("/client/<client_id>/favorites/<business_id>/add", methods=["POST"])
def api_add_favorite_business(client_id, business_id):
    add_favorite_business(client_id, business_id)
    return jsonify({"status": "ok"})

@app.route("/client/<client_id>/favorites/<business_id>/remove", methods=["DELETE"])
def api_remove_favorite_business(client_id, business_id):
    remove_favorite_business(client_id, business_id)
    return jsonify({"status": "ok"})

@app.route("/business/<bussines_id>/<offer_id>/remove", methods=["DELETE"])
def api_remove_offer(bussines_id, offer_id):
    remove_offer(bussines_id,offer_id)
    return jsonify({"status": "ok"})

@app.route("/client/<client_id>/shopping-cart/<bussines_id>/<offer_id>", methods=["POST"])
def api_add_to_shopping_cart(client_id, bussines_id, offer_id):
    data = request.json
    add_to_shopping_cart(
        client_id = data["clientId"],
        business_id = data["bussinesId"],
        offer_id = data["offerId"]
    )
    return jsonify({"status": "ok"})

@app.route("/client/<client_id>/shopping-cart/<bussines_id>/<offer_id>/delete", methods=["DELETE"])
def api_remove_offer_from_shopping_cart(client_id, business_id, offer_id):
    remove_offer_from_shopping_cart(client_id, offer_id, business_id)

@app.route("/client/<client_id>/shopping-cart", methods=["GET"])
def api_read_client_shopping_cart(client_id):
    cart = read_client_shopping_cart(client_id)
    return jsonify(cart)

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000,
        host="0.0.0.0"
        )



