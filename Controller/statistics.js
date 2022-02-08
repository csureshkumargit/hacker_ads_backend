const StatisticsModel = require('../Model/statistics');

exports.getAllProductsStatistics = (req, res) => {
    StatisticsModel.find()
        .then((statistics) =>
            res.status(200).json({ statistics: statistics }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}


exports.updateProductCounts = async (req, res) => {
    //const { id } = req.params;
    const { utm_id, id } = req.body;

    const findProduct = await StatisticsModel.findOne({ pid: id });
    console.log('fp', findProduct);
    if (!findProduct) {
        const newProduct = new StatisticsModel({
            pid: id,
            utm_id,
            count: 1
        })
        newProduct.save().then((addedProductinStatistics) =>
            res.status(200).json({ addedProductinStatistics: addedProductinStatistics }))
            .catch(err => {
                res.status(400).json({ error_Message: err })
            }
            )
    }
    else {
        StatisticsModel.findOneAndUpdate({ pid: id }, { count: findProduct.count + 1 }).then((updateProductinStatistics) =>
            res.status(200).json({ updateProductinStatistics: updateProductinStatistics }))
            .catch(err => {
                res.status(400).json({ error_Message: err })
            }
            )
    }


}