from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/comparison')
def tricky():
  return render_template('comparison.html')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug = True)