import FinanceServices from '../services/financeServices.js';
const financeServices = new FinanceServices();

class QuotesController {
  getQuote = async (req, res) => {
    try {
      const { formData } = req.body;
      if (!formData) return res.status(400).json({ message: 'token or chain data missing', errorCode: 'Bad Request/missing details' });

      if (formData?.srcDecimal !== formData?.destDecimal) {
        return res.status(400).json({});
      }

      const paramsObject = {
        srcChainId: formData?.srcChainId,
        srcQuoteTokenAddress: formData?.srcQuoteTokenAddress,
        srcQuoteTokenAmount: calculateTokenAmount(formData?.amount, formData?.decimals),
        dstChainId: formData?.dstChainId,
        dstQuoteTokenAddress: formData?.dstQuoteTokenAddress,
        slippage: 1,
      };

      const quote = await financeServices.fetchQuote(paramsObject);
      res.json({ data: quote?.data });
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  };
}

function calculateTokenAmount(humanReadableAmount, decimals) {
  const amount = BigInt(Math.floor(humanReadableAmount * Math.pow(10, decimals)));
  return amount.toString();
}

export default QuotesController;
