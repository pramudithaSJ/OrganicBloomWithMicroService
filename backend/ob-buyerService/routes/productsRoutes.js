const router = require("express").Router();
const { getAllProducts } = require("../controller/productController");
const { getOneProduct } = require("../controller/productController");
const { addProduct } = require("../controller/productController");
const { updateProduct } = require("../controller/productController");
const { deleteProduct } = require("../controller/productController");
const { searchProducts } = require("../controller/productController");

router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/search/:text", searchProducts);

module.exports = router;
