from flask import Blueprint, render_template, request, flash


views = Blueprint('views', __name__)


@views.route('/')
def home():

    flash('Welcome to Academia', category='success')

    return render_template("base.html")

