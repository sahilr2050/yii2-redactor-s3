<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace Sahilr2050\RedactorS3\actions;

use Yii;
use Sahilr2050\RedactorS3\models\ImageUploadModel;

/**
 * @author Nghia Nguyen <yiidevelop@hotmail.com>
 * @since 2.0
 */
class ImageUploadAction extends \yii\base\Action
{
    function run()
    {
        if (isset($_FILES)) {
            $model = new ImageUploadModel();
            if ($response = $model->upload()) {
                return $response;
            } else {
                return ['error' => 'Unable to save image file'];
            }
        }
    }

}
