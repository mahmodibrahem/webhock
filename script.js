document.getElementById("discordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value || "مجهول";
    const message = document.getElementById("message").value;
    const webhookUrl = "https://discord.com/api/webhooks/1300594561521025084/4a3_XdzW17-VpE7o8vOxlM-Fhym8rVqxyovfid5nE35yE76V9PCtcKr9OS4S28z2lyV1";

    if (!message) {
        alert("الرجاء إدخال رسالة!");
        return;
    }

    const payload = {
        username: username,
        content: message // إرسال الرسالة كـ محتوى عادي
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("تم إرسال الرسالة بنجاح!");
            document.getElementById("message").value = ""; // مسح محتوى الرسالة
        } else {
            alert("حدث خطأ أثناء إرسال الرسالة!");
        }
    })
    .catch(error => {
        alert("حدث خطأ في الاتصال بالخادم!");
        console.error(error);
    });
});
