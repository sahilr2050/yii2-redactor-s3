<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace Sahilr2050\redactor\models;

use Yii;
use yii\helpers\Url;
use yii\web\UploadedFile;
use yii\helpers\Inflector;
use backend\components\aws\S3;

class FileUploadModel extends \yii\base\Model
{
    /**
     * @var UploadedFile
     */
    public $file;
    private $_fileName;

    public function rules()
    {
        return [
            ['file', 'file', 'extensions' => Yii::$app->controller->module->fileAllowExtensions]
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $structure = Yii::$app->params['fileUploadUrl'].Yii::$app->session->get('rtoid');
            $s3client = new S3;
            $uploadedPath = $s3client->uploadSingleFile($structure, $this->file);
            if ($uploadedPath) {
                return [
                    'filelink' => Yii::$app->params['AWS_EFFECTIVE_URL'].$uploadedPath,
                    'filename' => $this->file->baseName.".".$this->file->extension
                ];
            }
        }
        return false;
    }

    public function getResponse()
    {
        return [
            'filelink' => Yii::$app->controller->module->getUrl($this->getFileName()),
            'filename' => $this->getFileName()
        ];
    }

    public function getFileName()
    {
        if (!$this->_fileName) {
            $fileName = substr(uniqid(md5(rand()), true), 0, 10);
            $fileName .= '-' . Inflector::slug($this->file->baseName);
            $fileName .= '.' . $this->file->extension;
            $this->_fileName = $fileName;
        }
        return $this->_fileName;
    }

    public function beforeValidate()
    {
        if (parent::beforeValidate()) {
            $this->file = UploadedFile::getInstanceByName('file');
            return true;
        }
        return false;
    }

}
