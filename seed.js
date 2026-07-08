const { db, User, Task } = require("./models");
async function seed() {
    await db.sync({ force: true});

    const rehman = await User.create ({
        name: "Rehman",
        email: "rehman938@gmail.com",
        password: "rehmaniscool",
    });

    await Task.create({ title: "Finish TTPR work", priority: 1, status: "todo", UserId: rehman.id});
    await Task.create({ title: "Review work for next session", priority: 2, status: "doing", UserId: rehman.id});
    await Task.create({ title: "Fix bug for previous TTPR project", priority: 3, status: "done", UserId: rehman.id});

    console.log("Seeded!");
    await db.sync();
}

seed();