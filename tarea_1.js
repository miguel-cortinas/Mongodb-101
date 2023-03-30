// 1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando: 
// $ mongoimport -d students -c grades < grades.json

// 2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo: 
    //>use students; >db.grades.count() ¿Cuántos registros arrojo el comando count?
    // 800

// 3) Encuentra todas las calificaciones del estudiante con el id numero 4.
    //db.grades.find({"student_id":4});
    //87.8907 - 27.2900 - 5.2444 - 28.6564

// 4) ¿Cuántos registros hay de tipo exam?
    // db.grades.find({"type":"exam"}).count();
    // 200

// 5) ¿Cuántos registros hay de tipo homework?
    // db.grades.find({"type":"homework"}).count();
    // 400

// 6) ¿Cuántos registros hay de tipo quiz?
    //db.grades.find({"type":"quiez"}).count();
    // 200

// 7) Elimina todas las calificaciones del estudiante con el id numero 3
    // db.grades.deleteMany({"student_id":3});
    // 4

// 8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
    // db.grades.find({"score":75.29561445722392});
    // {
        // id: 50906d7fa3c412bb040eb59e
        // student_id: 9
        // type: homework
    //}

// 9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
    // db.grades.updateMany({"_id":ObjectId("50906d7fa3c412bb040eb591")},{$set:{score:100}})
    // matchedCount 1 - modifiedCount - 1
    
// 10) A qué estudiante pertenece esta calificación.
    // db.grades.find({"score":100});
    // student_id:6