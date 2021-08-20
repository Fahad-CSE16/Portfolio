# Generated by Django 3.2.3 on 2021-08-20 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_projectworks_rank'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='projectworks',
            options={'ordering': ['-rank']},
        ),
        migrations.AlterField(
            model_name='projectworks',
            name='contribution',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projectworks',
            name='tools',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projectworks',
            name='urls',
            field=models.URLField(blank=True, null=True),
        ),
    ]