from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/memories")
def memories():
    return render_template("slider.html")

@app.route("/videos")
def videos():
    return "under construction"

if __name__ == "__main__":
    app.run(debug=True)