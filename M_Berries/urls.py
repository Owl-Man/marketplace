"""
URL configuration for M_Berries project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from MainApp import views
from django.contrib.auth.views import LogoutView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name = 'home'),
    path('<int:pk>/', views.product_detail, name = 'product_detail'),
    path('registration/', views.register),
    path('login/', views.user_login, name='login'),
    path(r'^logout/$', LogoutView.as_view(), {'next_page': settings.LOGOUT_REDIRECT_URL}, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('add-to-cart/', views.add_to_cart, name = 'add-to-cart'),
    path('cart/', views.show_cart, name = 'checkout'),
    path('<slug:val>/', views.CategoryView.as_view(), name = 'category'),
    path('cart/order_placed/', views.thx, name = 'order_placed')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# 1.18.03