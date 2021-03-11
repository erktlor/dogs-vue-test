<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <div class="header__logo">
          <Logo />
        </div>
        <div class="header__title">Dog breeds list</div>
      </div>
    </Container>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 64px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.header__content {
  display: flex;
  align-items: center;
}

.header__logo {
  height: 42px;
  width: 42px;
}

.header__title {
  margin-left: 24px;
  font-size: 22px;
  font-weight: 600;
}
</style>
