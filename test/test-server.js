var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var server = '../server/app';

describe('Coffees', function() {
    it('should list ALL coffees on /coffees GET', function (done) {
        chai.request(server)
            .get('/coffees')
            .end(function(err, res){
                  res.should.have.status(200);
                  done();
                });
    });
  it('should list a SINGLE coffee on /coffee/<id> GET');
  it('should add a SINGLE coffee on /coffees POST');
  it('should update a SINGLE coffee on /coffee/<id> PUT');
  it('should delete a SINGLE coffee on /coffee/<id> DELETE');
});
