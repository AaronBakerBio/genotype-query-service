import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

var jinst = require('jdbc/lib/jinst')
var JDBC = require('jdbc')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(['./drivers/hsqldb.jar',
                        './drivers/derby.jar',
                        './drivers/derbyclient.jar',
                        './drivers/derbytools.jar']);
}

var config = {
    // Required
    url: 'jdbc:hsqldb:hsql://localhost/xdb',
  
    // Note that if you sepecify the user and password as below, they get
    // converted to properties and submitted to getConnection that way.  That
    // means that if your driver doesn't support the 'user' and 'password'
    // properties this will not work.  You will have to supply the appropriate
    // values in the properties object instead.
    user: 'SA',
    password: '',
    properties: {}
  };
  
const hsqldb = new JDBC(config);  // can this be exported after initialization?

hsqldb.initialize(function(err) {
  if (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000`)
);
