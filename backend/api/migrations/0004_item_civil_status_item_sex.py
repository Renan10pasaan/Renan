# Generated by Django 5.0.6 on 2024-07-09 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_item_place_of_birth'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='civil_status',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='sex',
            field=models.CharField(max_length=11, null=True),
        ),
    ]