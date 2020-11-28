from bottle import route, run, static_file


@route('/')
def serve_html():
  return static_file("index.html", root=".")

@route('/frontjs')
def givejavascript():
  return static_file("script.js", root =".")

@route('/style_css')
def style_css():
    return static_file("style.css", root=".")

@route('/img1')
def img1():
    return static_file("check.png", root=".")

@route('/img2')
def img2():
    return static_file("x.png", root=".")

run()
