import FinanceServices from '../services/financeServices.js';
const financeServices = new FinanceServices();

class ParamsController {
  getParams = async (req, res) => {
    try {
      const { transactionObj } = req.body;

      if (!transactionObj) return res.status(400).json({ message: 'transactionObj missing', errorCode: 'Bad Request/missing details' });

      const params = await financeServices.createTransaction(transactionObj);
      res.json({ data: params?.data });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  };
}

export default ParamsController;
