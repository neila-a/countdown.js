import { styled } from '@mui/material/styles';
import {
    Dialog,
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography
} from '@mui/material';
import {
    Close as CloseIcon
} from "@mui/icons-material";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
function Index(): JSX.Element {
    var [todayPassHours, setTodayPassHours] = useState<number>(1);
    var [todayPassHoursPercent, setTodayPassHoursPercent] = useState<number>(1);
    var [weekDay, setWeekDay] = useState<number>(1);
    var [weekDayPassPercent, setWeekDayPassPercent] = useState<number>(1);
    var [date, setDate] = useState<number>(1);
    var [monthPassPercent, setMonthPassPercent] = useState<number>(1);
    var [month, setMonth] = useState<number>(1);
    var [yearPass, setYearPass] = useState<number>(1);
    function init_life_time() {
        function getAsideLifeTime() {
            /* 褰撳墠鏃堕棿鎴� */
            let nowDate = +new Date();
            /* 浠婂ぉ寮€濮嬫椂闂存埑 */
            let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
            /* 浠婂ぉ宸茬粡杩囧幓鐨勬椂闂� */
            let calcTodayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
            /* 浠婂ぉ宸茬粡杩囧幓鐨勬椂闂存瘮 */
            let calcTodayPassHoursPercent = (calcTodayPassHours / 24) * 100;
            setTodayPassHours(calcTodayPassHours);
            setTodayPassHoursPercent(calcTodayPassHoursPercent);
            /* 褰撳墠鍛ㄥ嚑 */
            let weeks = {
                0: 7,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6
            };
            let calcWeekDay = weeks[new Date().getDay()] - 1;
            let calcWeekDayPassPercent = (calcWeekDay / 7) * 100;
            setWeekDay(calcWeekDay);
            setWeekDayPassPercent(calcWeekDayPassPercent);
            let year = new Date().getFullYear();
            let calcDate = new Date().getDate() - 1;
            let calcMonth = new Date().getMonth();
            let monthAll = new Date(year, calcMonth, 0).getDate();
            let calcMonthPassPercent = (date / monthAll) * 100;
            setDate(calcDate);
            setMonthPassPercent(calcMonthPassPercent);
            let calcYearPass = (month / 12) * 100;
            setMonth(calcMonth);
            setYearPass(calcYearPass);
        }
        getAsideLifeTime();/*
        useEffect(function () {
            setInterval(() => {
                getAsideLifeTime();
            }, 1000);
        });*/
    }
    init_life_time();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="sidebar-box classNameListBox">
            <div className="aside aside-count">
                <div className="p-3">
                    <span style={{
                        fontSize: "1.2em",
                        color: "orange",
                        display: "inline-block"
                    }}>
                        <i className="fas fa-hourglass-half"></i></span> 人生倒计时
                    <img title="info" src="info.png" onClick={handleClickOpen} style={{
                        display: "inline-block",
                        float: "right"
                    }} />
                    <div>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                关于
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    此网页是
                                    <a href="https://neila.ga/">Neila</a>
                                    根据<a href="https://www.baixiaomo360.com/2">
                                    白先生博客上的一篇文章</a>改编成的静态网页。
                                    <a href="https://creativecommons.org/licenses/by/4.0/deed.zh">原代码协议</a>
                                    {"   |   "}
                                    <a href="https://www.gnu.org/licenses/gpl-3.0.html">本代码开源协议</a>
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    关闭
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>
                </div>
                <div className="content">
                    <div className="item" id="dayProgress">
                        <div className="title">今日已经过去<span>{todayPassHours}</span>小时</div>
                        <div className="progress">
                            <div className="progress-bar">
                                <div className="progress-inner progress-inner-1" style={{
                                    width: `${todayPassHoursPercent}%`
                                }}></div>
                            </div>
                            <div className="progress-percentage">{todayPassHoursPercent}%</div>
                        </div>
                    </div>
                    <div className="item" id="weekProgress">
                        <div className="title">这周已经过去<span>{weekDay}</span>天</div>
                        <div className="progress">
                            <div className="progress-bar">
                                <div className="progress-inner progress-inner-2" style={{
                                    width: `${weekDayPassPercent}%`
                                }}></div>
                            </div>
                            <div className="progress-percentage">{weekDayPassPercent}%</div>
                        </div>
                    </div>
                    <div className="item" id="monthProgress">
                        <div className="title">本月已经过去<span>{date}</span>天</div>
                        <div className="progress">
                            <div className="progress-bar">
                                <div className="progress-inner progress-inner-3" style={{
                                    width: `${monthPassPercent}%`
                                }}></div>
                            </div>
                            <div className="progress-percentage">{monthPassPercent}%</div>
                        </div>
                    </div>
                    <div className="item" id="yearProgress">
                        <div className="title">今年已经过去<span>{month}</span>个月</div>
                        <div className="progress">
                            <div className="progress-bar">
                                <div className="progress-inner progress-inner-4" style={{
                                    width: `${yearPass}%`
                                }}></div>
                            </div>
                            <div className="progress-percentage">{yearPass}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;