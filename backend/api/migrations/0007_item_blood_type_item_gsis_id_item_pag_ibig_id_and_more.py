# Generated by Django 5.0.6 on 2024-07-09 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_item_gsis_id_item_height'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='blood_type',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='gsis_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='pag_ibig_id',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='weight',
            field=models.CharField(max_length=100, null=True),
        ),
    ]