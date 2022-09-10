import React, { useState } from "react";
import styles from "../detail/Detail.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Detail = () => {
    // const clip = () => {
    //     let url = '';
    //     const textarea = document.createElement("textarea");
    //     document.body.appendChild(textarea);
    //     url = window.document.location.href;
    //     textarea.value = url;
    //     textarea.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(textarea);
    //   }

    // function copyTextUrl() {
    //     // Browser compatibility 알림
    //     if (!document.queryCommandSupported("copy")) {
    //         alert("No Support");
    //         return;
    //     }

    //     // 선택 후 복사
    //     copyLinkRef.current.focus();
    //     copyLinkRef.current.select();
    //     document.execCommand('copy');

    //     // 복사 완료 알림
    //     alert("링크를 복사했습니다.");
    // }

    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            티제품
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            티 세트
        </Link>,
    ];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));
    const [age, setAge] = useState("");
    const [pack, setpack] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const packhandleChange = (event) => {
        setpack(event.target.value);
    };

    return (
        <Grid>
            {/* <div className={styles.container}>detail</div> */}
            <div className={styles.item_info}>
                <div className={styles.leftbox}>
                    <div className={styles.item_layout}>
                        <div className={styles.imgbox}>
                            <img
                                className={styles.img}
                                src="https://www.osulloc.com/upload/kr/ko/adminImage/JY/QU/20210825170710069ZN.png?quality=80"
                                alt=""
                            />
                            <div className={styles.buyer_benefits}>
                                <Box sx={{ width: "100%" }}>
                                    <Grid
                                        container
                                        rowSpacing={1}
                                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                    >
                                        <Grid xs={4}>
                                            <Item>
                                                <span>💍</span>
                                                뷰티포인트
                                            </Item>
                                        </Grid>
                                        <Grid xs={4}>
                                            <Item>
                                                <span>🍀</span>
                                                찻잎 450p 적립
                                            </Item>
                                        </Grid>
                                        <Grid xs={4}>
                                            <Item>
                                                <span>🚛</span>
                                                3만원 이상 무료배송
                                            </Item>
                                        </Grid>
                                        <Grid xs={4}>
                                            <Item>
                                                <span>🎁</span>
                                                (유료)포장가능
                                            </Item>
                                        </Grid>
                                        <Grid xs={4}>
                                            <Item>
                                                <span>👜</span>
                                                쇼핑백 동봉
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightbox}>
                    <div>
                        <Stack className={styles.breadcrumbs} spacing={2}>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                        <p className={styles.productName}>시크릿 티 스토리</p>
                        <p className={styles.produtContent}>
                            신비로운 섬 제주의 다채로운 향기와 이야기를 품은,
                            취향 걱정없이 선물하기 좋은 고급스러운 구성의 선물
                            세트
                        </p>
                        <div>
                            <div className={styles.btnAndPriceBox}>
                                <span className={styles.smallbtnset}>
                                    {/* TODO: a 태그로 하는 방법 생각해보기  */}
                                    <button className={styles.urlbtn}></button>
                                    <button className={styles.fbtn}></button>
                                    {/* <button className={styles.btn}>🤍</button> */}
                                </span>
                                <p>45000원</p>
                            </div>
                            <Grid>
                                <FormControl
                                    className={styles.addproducts}
                                    sx={{ m: 1, minWidth: 120 }}
                                    fullWidth
                                >
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>추가 상품 선택</em>
                                        </MenuItem>
                                        <MenuItem value={10}>
                                            녹차 밀크 스프레드 세트
                                            <span>20000원</span>
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            러블리 티 박스
                                            <span>20000원</span>
                                        </MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Without label</FormHelperText> */}
                                </FormControl>
                            </Grid>

                            <div>
                                <div className={styles.productbottombox}>
                                    <div className={styles.productflexbox}>
                                        <label>구매 수량</label>
                                        <div className={styles.productcount}>
                                            <button>-</button>
                                            <span> 2 </span>
                                            <button>+</button>
                                        </div>
                                    </div>

                                    <FormControl
                                        className={styles.package}
                                        sx={{ m: 1, minWidth: 120 }}
                                        fullWidth
                                    >
                                        <Select
                                            value={pack}
                                            onChange={packhandleChange}
                                            displayEmpty
                                            inputProps={{
                                                "aria-label": "Without label",
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>포장 가능(+2000원)</em>
                                            </MenuItem>

                                            <MenuItem value={10}>
                                                포장안함
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                포장함
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <div className={styles.delivery}>
                                        무료배송
                                    </div>
                                    <div>
                                        <span>상품금액합계</span>
                                        <span>76,000원</span>
                                    </div>
                                    <button>선물하기</button>
                                    <button>장바구니</button>
                                    <button>바로구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default Detail;
