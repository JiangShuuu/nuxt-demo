<script lang="ts" setup>
const handleECPaySubmit = (formData: string) => {
  // 創建一個臨時的 div 來存放表單 HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = formData;

  // 獲取表單元素
  const form = tempDiv.querySelector("form");
  if (!form) {
    console.error("表單元素不存在");
    return;
  }

  // 將表單添加到 document 中
  document.body.appendChild(form);

  // 提交表單
  form.submit();

  // 清理：延遲移除表單
  setTimeout(() => {
    document.body.removeChild(form);
  }, 100);
};

const fetchData = async () => {
  const { data } = await useFetch("http://localhost:3000/api/payment/create", {
    method: "POST",
  });
  console.log("data", data.value);
  if (data.value) {
    // 假設 API 返回的是包含表單 HTML 的字符串
    handleECPaySubmit(data.value as string);
  }
}
</script>

<template>
  <div>
    <button @click="fetchData">fetchData</button>
  </div>
</template>
