const Post = require("../models/postModel.js");

//@desc add new price
//@route POST /api/pricing/addPrices/:id
//@access private-user

const addPrices = async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.id;
    const findPost = await Post.findById(postId);
    const { FeatureA, FeatureB, FeatureC, serviceTier, price } = req.body;
    if (String(findPost.owner._id) !== userId)
      return res.status(401).json({ msg: "not authorized" });
    else
      await Post.findByIdAndUpdate(postId, {
        $push: {
          packages: {
            FeatureA,
            FeatureB,
            FeatureC,
            serviceTier,
            price,
            PackageOwner: userId,
          },
        },
      });
    res.json({ msg: "new package" });
  } catch (err) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};
//@desc delete price
//@route delete /api/pricing/deletePrices/:id/:priceId
//@access private-user
const deletePrices = async (req, res) => {
  try {
    const UserId = req.userId;
    const post = await Post.findById(req.params.id);

    if (String(post.owner._id) !== UserId)
      return res.status(401).json({ msg: "not authorized" });
    await Post.findByIdAndUpdate(req.params.id, {
      $pull: {
        packages: {
          _id: req.params.priceId,
        },
      },
    });

    res.json({ msg: `price is deleted` });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${err}` });
  }
};

module.exports = { addPrices, deletePrices };
