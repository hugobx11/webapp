from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request, "myapp/index.html", context)

def login(request):
    context = {}
    return render(request, "myapp/login.html", context)