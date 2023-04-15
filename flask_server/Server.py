from flask import Flask

app = Flask(__name__)

@app.route("/start")
def start():
    return"welcome"

if __name__=="__main__":
    app.run(debug=True)