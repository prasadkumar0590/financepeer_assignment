# Generated by Django 3.2.12 on 2022-02-06 05:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userbolgdata',
            old_name='user_id',
            new_name='userId',
        ),
    ]
