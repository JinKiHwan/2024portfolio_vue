<template>
    <section class="login">
        <div class="login_wrap">
            <h3>LOGIN</h3>
            <form action="">
                <ul>
                    <li>
                        <input type="text" placeholder="Please enter your ID" />
                    </li>
                    <li><input type="password" placeholder="Please enter your Password" /></li>
                </ul>
                <button type="submit" class="submit">Yammy</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTgyMzc0MTR8&ixlib=rb-4.0.3&q=85');
    background-size: cover;
    &_wrap {
        width: calc(100% - 20px);
        max-width: 500px;
        aspect-ratio: 7/5;
        border-radius: 30px;
        background: linear-gradient(#b3fdfd55, #00000055);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 30px rgba(100, 100, 100, 0.2);
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            text-align: center;
            font-weight: 800;
            font-size: 30px;
            margin-bottom: 30px;
            color: #00000077;
        }
        form {
            width: 100%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ul {
            width: 100%;
            margin-bottom: 50px;
            li {
                display: flex;
            }
            label {
                display: block;
                width: 100px;
            }
            input {
                width: 100%;
                height: 45px;
                margin-bottom: 10px;
                background: rgba(0, 0, 0, 0.3);
                border: none;
                outline: none;
                padding: 10px;
                font-size: 13px;
                color: #fff;
                text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 4px;
                box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
                -webkit-transition: box-shadow 0.5s ease;
                -moz-transition: box-shadow 0.5s ease;
                -o-transition: box-shadow 0.5s ease;
                -ms-transition: box-shadow 0.5s ease;
                transition: box-shadow 0.5s ease;

                &::placeholder {
                    color: rgba(255, 255, 255, 0.8);
                }
                &:focus {
                    background: rgba(105, 102, 102, 0.8);
                }
            }
        }

        .submit {
            width: 100%;
            max-width: 150px;
            height: 45px;
            border-radius: 5px;
            color: #fff;
            font-weight: 500;
            background: linear-gradient(180deg, rgb(51, 126, 245) 20%, rgb(92, 144, 237) 100%);
            transition: all 0.3s;
            &:hover {
                transform: scale(1.03);
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            }
        }
    }
}
</style>
