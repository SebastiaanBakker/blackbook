
from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__) 


# Startpage
@app.route('/')
def index():
    # Adding a new name...we start immediatly...   
	return render_template('base.html')



@app.route('/ajax', methods=['GET', 'POST'])
def ajax():
    if request.method == 'GET':
        if "name" in request.args:
            if request.args.get("name") == "search":
                return render_template('show.html')
            elif request.args.get("name") == "add":
                return render_template('showuser.html')
            elif request.args.get("name") == "new":
                return render_template('new.html')
            #return "bla"+request.args.get("name")
        else:
            return "no get value"


@app.route('/newajax', methods=['POST'])
def newajax():
    if request.form.has_key('action'):
        action = request.form['action']
        y = request.form['newdata']
        return "ok"
    else:
        return "bad"


        import urllib
        url=urllib.unquote(y).decode('utf8')
        return str(x)+" "+str(url)


if __name__ == '__main__':
	app.debug = True
	app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
	app.run()

 
# End of file





