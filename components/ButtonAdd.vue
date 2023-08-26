<template>
	<button class="btn" type="button"><slot></slot></button>
</template>

<style lang="scss">
	.btn {
		display: flex;
		padding: 17.5px 25px;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 10px;
		background: var(--white-gray, #f4f5f9);
		color: var(--blue-dark, #2d3b87);
		font-size: 15px;
		font-weight: 700;
		cursor: pointer;
	}

	.btn-pay {
		background-color: rgb(17, 186, 17);
		color: #f3f3f3;
	}
</style>
