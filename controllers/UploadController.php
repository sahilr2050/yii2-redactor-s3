<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace Sahilr2050\redactor\controllers;

use yii\web\Response;

class UploadController extends \yii\web\Controller
{

    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            [
                'class' => 'yii\filters\ContentNegotiator',
                'formats' => [
                    'application/json' => Response::FORMAT_JSON
                ],
            ]
        ];
    }

    public function actions()
    {
        return [
            'file' => 'Sahilr2050\redactor\actions\FileUploadAction',
            'image' => 'Sahilr2050\redactor\actions\ImageUploadAction',
            'image-json' => 'Sahilr2050\redactor\actions\ImageManagerJsonAction',
            'file-json' => 'Sahilr2050\redactor\actions\FileManagerJsonAction',
        ];
    }

}
