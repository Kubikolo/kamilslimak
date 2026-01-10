from flask import Flask, request, jsonify
from main import (
create_user,
create_business,
create_offer,
read_client_points_list,
read_business_offer_info,
update_offer,
add_points,
read_login
)

app = Flask(__name__)

@app.route("/create-user", methods=["POST"])
def api_create_user():
    data = request.json
    uid = create_user(data["email"], data["password"], data["username"])
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

@app.route("/login", methods=["POST"])
def api_login():
    data = request.json
    uid = read_login(data["email"], data["password"])
    if uid:
        return jsonify({"status": "ok", "uid": uid})
    return jsonify({"status": "error", "message": "Błędny login lub hasło"}), 401

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
        )



