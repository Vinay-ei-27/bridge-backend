import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
const expect = chai.expect;

chai.use(chaiHttp);

describe('Tokens API', () => {
  it('should fetch supported tokens', (done) => {
    chai
      .request(app)
      .get('/tokens?blockchain=ethereum')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
