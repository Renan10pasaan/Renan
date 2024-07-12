from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100,null=True)
    last_name = models.CharField(max_length=100,null=True)
    middle_name = models.CharField(max_length=100,null=True)
    address = models.CharField(max_length=100,null=True)
    email = models.EmailField(max_length=100,null=True)
    phone = models.CharField(max_length=11,null=True)
    date_of_birth =models.DateField(null=True)
    place_of_birth = models.CharField(max_length=200,null=True)
    sex = models.CharField(max_length=11,null=True)
    civil_status = models.CharField(max_length=100,null=True)
    height = models.CharField(max_length=100,null=True)
    weight = models.CharField(max_length=100,null=True)
    blood_type = models.CharField(max_length=100,null=True,blank=True)
    gsis_id = models.CharField(max_length=100,null=True,blank=True)
    pag_ibig_id = models.CharField(max_length=100,null=True,blank=True)
    philhealth_id = models.CharField(max_length=100,null=True,blank=True)
    sss_id = models.CharField(max_length=100,null=True,blank=True)
    tin_id = models.CharField(max_length=100,null=True,blank=True)
    agency_employee = models.CharField(max_length=100,null=True,blank=True)
    citizenship = models.CharField(max_length=100,null=True)
    residental_address = models.CharField(max_length=100,null=True,blank=True)
    zip_code = models.CharField(max_length=100,null=True)
    permanent_address = models.CharField(max_length=100,null=True,blank=True)
    telephone_no = models.CharField(max_length=100,null=True,blank=True)
    mobile_no = models.CharField(max_length=100,null=True,blank=True)
    spouse_surname = models.CharField(max_length=100,null=True,blank=True)
    spouse_first_name = models.CharField(max_length=100,null=True,blank=True)
    spouse_middle_name =  models.CharField(max_length=100,null=True,blank=True)
    occupation = models.CharField(max_length=100,null=True,blank=True)
    employer_business_name = models.CharField(max_length=100,null=True,blank=True)
    business_address = models.CharField(max_length=100,null=True,blank=True)
    telephone_no = models.CharField(max_length=100,null=True,blank=True)
    name_of_children = models.CharField(max_length=100,null=True,blank=True)
    fathers_surname = models.CharField(max_length=100,null=True)
    fathers_first_name = models.CharField(max_length=100,null=True)
    fathers_middle_name = models.CharField(max_length=100,null=True)
    mothers_maiden_name = models.CharField(max_length=100,null=True)
    mothers_surname = models.CharField(max_length=100,null=True)
    mothers_first_name = models.CharField(max_length=100,null=True)
    mothers_middle_name = models.CharField(max_length=100,null=True)
    
    


    def ___str__(self):
        return self.first_name
    
    