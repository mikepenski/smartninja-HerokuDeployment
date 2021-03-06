from flask import Flask, render_template, request, redirect, url_for, make_response
from models import Contact, db

app = Flask(__name__) #Modal
db.create_all()  # create (new) tables in the database

@app.route("/")#CONTROLLER
def index():
    return render_template("index.html")#VIEW

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/datenschutz")
def datenschutz():
    return render_template("datenschutz.html")

@app.route("/impressum")
def impressum():
    return render_template("impressum.html")

@app.route("/kontakt", methods=["GET", "POST"])
def kontakt():
    contact_email = request.cookies.get("contact_email")
    if request.method == "GET":

        return render_template("kontakt.html")

    elif request.method == "POST":

        contact_betreff = request.form.get("contact_betreff")
        contact_name = request.form.get("contact_name")
        contact_email = request.form.get("contact_email")
        contact_message = request.form.get("contact_message")
        contact_datenschutz = request.form.get("contact_datenschutz")

        print(contact_betreff)
        print(contact_name)
        print(contact_email)
        print(contact_message)
        print(contact_datenschutz)

        contact = Contact(betreff=contact_betreff, name=contact_name, email=contact_email, message=contact_message, datenschutz=contact_datenschutz )

        # save the user object into a database
        db.add(contact)
        db.commit()  # Ausführung der DB-Transaktion

        # save user's email into a cookie
        #response = make_response(redirect(url_for('index')))

        response = make_response(render_template("Forms/success.html"))
        response.set_cookie("name", contact_name)
        response.set_cookie("email", contact_email)

        return response

@app.route("/work")
def work():
    return render_template("work.html")

if __name__ == '__main__':
    app.run(debug=True)