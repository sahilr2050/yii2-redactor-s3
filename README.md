Modifying for own use, Do not use this in your project. I can make a change according to my needs.
------------


yii2-redactor
=============
This is a clone and modified version of [Yii2-Redactor](https://github.com/yiidoc/yii2-redactor)

Extension redactor for Yii2 Framework. 

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require --prefer-dist sahilr2050/yii2-redactor-s3 "*"
```

 or
```
 "sahilr2050/yii2-redactor-s3": "*"
```

to the require section of your composer.json.

Configure
-----------------

Add to config file (config/web.php or common\config\main.php) 

```
    'modules' => [
        'redactor' => 'Sahilr2050\redactor\RedactorModule',
    ],
```
or if you want to change the upload directory.
to path/to/uploadfolder
default value `@webroot/uploads`

```
    'modules' => [
        'redactor' => [
            'class' => 'Sahilr2050\redactor\RedactorModule',
            'uploadDir' => '@webroot/path/to/uploadfolder',
            'uploadUrl' => '@web/path/to/uploadfolder',
            'imageAllowExtensions'=>['jpg','png','gif']
        ],
    ],
```

note: You need to create uploads folder and chmod and set security for folder upload
reference: [Protect Your Uploads Folder with .htaccess](http://tomolivercv.wordpress.com/2011/07/24/protect-your-uploads-folder-with-htaccess/),
[How to Setup Secure Media Uploads](http://digwp.com/2012/09/secure-media-uploads/)

Config view/form

```
<?= $form->field($model, 'body')->widget(\Sahilr2050\redactor\widgets\Redactor::className()) ?>
```

or not use ActiveField

```
<?= \Sahilr2050\redactor\widgets\Redactor::widget([
    'model' => $model,
    'attribute' => 'body'
]) ?>
```    
or config advanced redactor reference [Docs](http://imperavi.com/redactor/docs/)

```
<?= $form->field($model, 'body')->widget(\Sahilr2050\redactor\widgets\Redactor::className(), [
    'clientOptions' => [
        'imageManagerJson' => ['/redactor/upload/image-json'],
        'imageUpload' => ['/redactor/upload/image'],
        'fileUpload' => ['/redactor/upload/file'],
        'lang' => 'zh_cn',
        'plugins' => ['clips', 'fontcolor','imagemanager']
    ]
])?>
```

Bummer! i was tested on my project but not have many time to write document on file and usage.
If you have problem please create a [issue](https://github.com/sahilr2050/yii2-redactor-s3/issues)

Thanks!
