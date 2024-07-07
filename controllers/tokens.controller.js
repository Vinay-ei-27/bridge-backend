import FinanceServices from '../services/financeServices.js';
const financeServices = new FinanceServices();

class TokensController {
  getTokens = async (req, res) => {
    try {
      const { chainId } = req.query;
      if (!chainId) return res.status(400).json({ message: 'chainId missing', errorCode: 'Bad Request/missing details' });
      const tokens = await financeServices.fetchSupportedTokens(chainId);
      res.json({ data: tokens?.data });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  };
}

export default TokensController;
