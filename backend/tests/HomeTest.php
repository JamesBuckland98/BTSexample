<?php
include __DIR__ .'/../services/HomeService.php';

class HomeTest extends PHPUnit\Framework\TestCase {

    public function testHomeServiceGetMethod(){
        $result = HomeService::getHome();
        $this->assertSame('welcome', $result);
    }
    
    /**
     * @dataProvider nameProvider
     */
    public function testHomeServicePostReverseName($data, $expected) {
        $result = HomeService::postHome($data);
        $this->assertSame($expected, $result);
    }

    public function nameProvider() {
        return [
            [json_encode(["name" => "james"]), 'semaj'],
            [json_encode(["name" => "Stuart"]), 'trautS'],
            [json_encode(["name" => "Craig Buckland"]), 'dnalkcuB giarC']
        ];
    }
}
?>