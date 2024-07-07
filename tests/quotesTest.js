import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
const expect = chai.expect;

chai.use(chaiHttp);

describe('Quotes API', () => {
  it('should fetch a quote', (done) => {
    chai
      .request(app)
      .post('/quotes')
      .send({ token: 'ETH', chain: 'ethereum' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
