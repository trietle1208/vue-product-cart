<template>
  <div class="form-demo">
    <div class="flex justify-content-center">
      <div class="card">
        <h51 class="text-center">Register</h51>
        <form class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <InputText id="name" />
              <label for="name">Name*</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="name" />
              <label for="name">Name*</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="name" />
              <label for="name">Name*</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="name" />
              <label for="name">Name*</label>
            </div>
          </div>
          <Button type="submit" label="Submit" class="mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 550px;

        form {
            margin-top: 2rem;
        }

        .field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}

</style>
