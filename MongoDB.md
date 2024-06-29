# MongoDB
- Databases, Collections, Documents 
NoSQL database technology stores information in JSON documents instead of columns and rows used by relational databases. <br>
- `Document Databases`
Document databases are primarily built for storing information as documents, including, but not limited to, JSON documents. These systems can also be used for storing XML documents, for a NoSQL database example.
- `Key-value stores`
Key-value stores group associated data in collections with records that are identified with unique keys for easy retrieval. Key-value stores have just enough structure to mirror the value of relational databases (as opposed to non-relational databases) while still preserving the benefits of the NoSQL database structure.
- `Wide-column databases`
Wide-column databases use the tabular format of relational databases yet allow a wide variance in how data is named and formatted in each row, even in the same table. Like key-value stores, wide-column databases have some basic NoSQL structure while also preserving a lot of flexibility
- `Graph databases`
Graph databases use graph structures to define the relationships between stored data points. Graph databases are useful for identifying patterns in unstructured and semi-structured information.<br>
-  It is a DBMS that helps with horizontal scalability and load balancing capabilities.
collection of Document objectes - improved version of `BSON`. BSON supports additional data types like Date out of the box in addition to the data types like String, Boolean, Number, Array supported by JSON. 
- Schema free Database
- good support for Hierarchical data like JSON or XML
- Offers higher efficiency and reliability
<br> https://www.mongodb.com/resources/basics/json-and-bson<br>
https://www.mongodb.com/resources/basics/databases/key-value-database

**Today, JSON shows up in many different cases:**
- APIs
- Configuration files
- Log messages
- Database storage
<br>
https://www.mongodb.com/docs/guides/crud/install/<br>
https://www.mongodb.com/docs/manual/tutorial/getting-started/

**Creating a Database and Collection**
- Select a Database `use`
- Print the database name currently selected `db`
- Print names of all databases on the MongoDB server `show dbs`
- to get all collections of database `db.getCollectionNames()`
- to create a new  collection `db.crateCollection("<collection-name>")`
<br>
The _id attribute is a 12 byte number and is generated from

- System time in Unix epochs (4 bytes)
- Machine identifier (3 bytes)
- Process ID (2 bytes)
- Counter, starting from a randomly generated number (3 bytes)
The _id value displayed is in hexadecimal format and each hexadecimal number constitutes 4 bits of data. This is why the _id value has 24 digits.
<br>

- insert a document using - `db.collectionName.insert({<object>})`
- retrieve document using List Documents- `find()`  - can filter with `$where`, `$in`
- print document in readable format using -`pretty()`   
- update document by - `update(property, {$set: {update}})` 
- Delete Documents - `remove({property})` - $and operator can take multiple conditions to perform the logical AND operation. The conditions are to be given in an array (within "[]")
- Count documents in collection - `count()` can count by atribute values - can filter with `$where`


**mongoimport -d todoapp -c todos --file data/export_todoapp_todos.json**
- to append json file data into database collection

https://stackoverflow.com/questions/36792649/whats-the-difference-between-insert-insertone-and-insertmany-method <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date <br>
https://www.mongodb.com/docs/manual/reference/operator/query/ <br>
ODM v/s ORM https://dev.to/anudeepreddy/what-is-the-difference-between-an-odm-and-an-orm-2e7a

- On mac
 $ `brew services start <mongodb-community@7.0`
 $ `brew services restart <mongodb-community@7.0`
 $  `sudo lsof -i :27017` - to list all active ports 



## NodeJS based Object Document Modeling Library - Mongoose
- Mongoose for MongoDB access
- Schema (Validation, Consistent documents)
- Model (Crud operation)<br>
They act as the translator between your programming language and a document-based database.
*Connect to the data base with mongoose.connect(URI)* - URI format is `mongoose://host:port/databseName`
### mongoose Schema
define a schema constructor with object properties and datatypes
- `const child = new Schema({ name: String });`
- `const schema = new Schema({ name: String, age: Number, children: [child] });`
https://mongoosejs.com/docs/api/schema.html#Schema()

### mongoose Models
Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database. to do CRUD operations
- `const Tree = mongoose.model('Tree', schema);`
https://mongoosejs.com/docs/models.html

### MongoDB Connection
 mongoose provides a `connect API` to connect to the mongoDb database.
 - You can connect to MongoDB with the mongoose.connect() method.
 `config.mongoose.url is mongodb://host:port/database`
 
```
mongoose.connect(config.mongoose.url).then(() => {

  console.log("Connected to MongoDB");

});
```
https://mongoosejs.com/docs/connections.html



Mongoose is an Object-Document Mapper (ODM) which acts as a translator between your Nodejs application and MongoDB. Some of the Mongoose methods/classes used were

> mongoose.connect() - to create a MongoDB connection

> mongoose.Schema() - to define a schema for the Mongo documents

Types - defines the data type of a particular document field

Schema options - additional options to configure a document field

required - to define a mandatory field in the document

default - to set a default value for a document field if not present

mongoose.Model() - Mongoose wrapper over the schema object to apply methods over a collection of a Mongo database


**data types in MongoDB**
1. String: A sequence of UTF-8 characters.
  - Used to store textual data.
  - Can be used to represent names, addresses, descriptions, etc.
  - Example: "John Doe"

2. Number: A numeric value.
  - Used to store numerical data.
  - Can be used to represent age, quantity, price, etc.
  - Example: 42

3. Boolean: A value representing true or false.
  - Used to store boolean values.
  - Example: true

4. Object: A nested structure of key-value pairs.
  - Used to store complex data structures.
  - Example:
    ```
    {
      name: "John Doe",
      age: 42,
      address: {
        city: "New York",
        country: "USA"
      }
    }
    ```

5. Array: An ordered list of values.
  - Used to store multiple values under a single field.
  - Example: [1, 2, 3, 4, 5]

6. Date: A date and time value.
  - Used to store timestamps and dates.
  - Example: ISODate("2022-01-01T10:30:00Z")

7. ObjectId: A unique identifier for each document created by MongoDB.
  - Used as the primary key in MongoDB.
  - Automatically generated when a document is inserted.
  - Example: ObjectId("61fb67b85e22f51b04a0b3f4")

8. Binary: A binary data object.
  - Used to store binary data, such as images or files.
  - Example: <Binary Data>

9. Null: A value indicating the absence of data.
  - Used to represent missing or unknown values.
  - Example: null

Takeaways / Best Practices:
- Choose the appropriate data type based on the nature of the data being stored.
- Ensure consistency in data types across documents in a collection.
- Be mindful of the data size and choose appropriate data types accordingly.
- Understand the query and index performance implications of different data types.

**“Indexing” in MongoDB**
Indexing in MongoDB refers to the process of creating indexes on fields in a collection to improve the performance and efficiency of queries.

- It is used in MongoDB to optimize query execution and enhance search capabilities.

Steps to use indexing in MongoDB:
1. Identify the fields on which you want to create indexes.
2. Use the createIndex() method or ensureIndex() method to create indexes on the specified fields.
3. Specify the type of index, such as ascending or descending order, unique, etc.
4. MongoDB automatically uses the created indexes to speed up queries that involve those fields.

// Example code snippet to create an index on a collection
db.collection.createIndex({ field: 1 })

Takeaways / best practices:
- Identify the fields that are frequently queried and create indexes on them for improved performance.
- Avoid creating too many indexes, as it can impact write operations and consume additional disk space.
- Regularly monitor and review the indexes to ensure they are still beneficial and align with the application's query patterns.

**Geospatial Indexes in MongoDB**

Geospatial indexes in MongoDB are special indexes used to efficiently store and query geospatial data, such as points, lines, and polygons.

They are used in applications that require geospatial queries or analysis, such as location-based services, geographic information systems, and mapping applications.

To use geospatial indexes in MongoDB, follow these steps:

1. Store the geospatial data in a collection using the GeoJSON format.
2. Create a geospatial index on the desired field(s) using the `createIndex()` method.
3. Perform geospatial queries using MongoDB's geospatial operators such as `$near`, `$geoWithin`, and `$geoIntersects`.

Example:
Suppose we have a collection named `places` with documents containing a field `location` storing the geospatial data. To create a geospatial index on this field, we can use the following code snippet:

```javascript
db.places.createIndex({ location: "2dsphere" })
```

After creating the index, we can perform queries like finding the nearest places to a given point or finding places within a specific polygon.

Takeaways / Best practices:
- Store geospatial data in the GeoJSON format for compatibility with MongoDB's geospatial features.
- Use the appropriate geospatial index type based on the shapes and operations required (e.g., "2dsphere" for spherical geometries and "2d" for flat geometries).
- Consider using geohash techniques or dividing the data into grids for optimizing performance in cases with large datasets or complex queries.

**Nested Schema**

**Valdator**



