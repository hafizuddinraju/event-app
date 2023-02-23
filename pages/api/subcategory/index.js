import {
  getSubCategory,
  postEvent,
  updateSubAvailability,
} from "../../../databaseConnection/controllerSubCategory";
import connectMongo from "../../../databaseConnection/database";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      // res.status(200).json({method,name:'Get'})
      getSubCategory(req, res);
      break;
    case "POST":
      postEvent(req, res);
      break;
    case "PUT":
      updateSubAvailability(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allow`);
      break;
  }
}
