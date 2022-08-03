window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill out the task");
      return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");
    const tast_action_edit_el = document.createElement("button");
    tast_action_edit_el.classList.add("edit");
    tast_action_edit_el.innerHTML = "Edit";

    const tast_action_delete_el = document.createElement("button");
    tast_action_delete_el.classList.add("delete");
    tast_action_delete_el.innerHTML = "Delete";
    task_action_el.appendChild(tast_action_edit_el);
    task_action_el.appendChild(tast_action_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);
    input.value = "";
    tast_action_edit_el.addEventListener("click", () => {
      if (tast_action_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        tast_action_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        tast_action_edit_el.innerText = "Edit";
      }
    });
    tast_action_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
