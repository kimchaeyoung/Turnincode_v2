# Generated by Django 2.2.1 on 2019-11-13 14:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('turninApp', '0003_auto_20191107_1613'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homework_student',
            name='commit_message',
        ),
        migrations.RemoveField(
            model_name='homework_student',
            name='commit_number',
        ),
        migrations.RemoveField(
            model_name='homework_student',
            name='score',
        ),
        migrations.CreateModel(
            name='CommitList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.CharField(max_length=100)),
                ('commit_number', models.CharField(max_length=100)),
                ('commit_message', models.CharField(max_length=100)),
                ('hs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hs', to='turninApp.Homework_Student')),
            ],
        ),
    ]
