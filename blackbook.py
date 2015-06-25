
from flask import Flask, render_template, request, session, redirect, url_for

import urllib

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


@app.route('/NewPerson', methods=['POST'])
def newperson():
    if request.form.has_key('name'):
        x = request.form['name']
        return str(x)
    else:
        return "Bad form" # we dont need to keep this (server will give bad request anyway)

@app.route('/NewBusiness', methods=['POST'])
def newbusiness():
    if request.form.has_key('name'):
        x = request.form['name']
        return str(x)
    else:
        return "Bad form" # we dont need to keep this (server will give bad request anyway)


    
    




if __name__ == '__main__':
	app.debug = True
	app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
	app.run()

 
# End of file





