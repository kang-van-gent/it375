const  getAuthResult = () => {
    const checkAuth = async (id, password) => {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                let authData = "User Authenticate";
                resolve(authData);
            }, 1000);
        });
    };

    const getStudentData = async (authData) => {
        checkAuth()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(error.message);
            });

        return  await new Promise((resolve, reject) => {
            setTimeout(() => {
                let name = "Kang";
                let permission = "member";
                resolve({ name: name, permission: permission });
            }, 2000);
        });
    };
    getStudentData()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err.message);
        });
};
getAuthResult();