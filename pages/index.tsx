import Head from "next/head";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function Index(): JSX.Element {
    var [todayPassHours, setTodayPassHours] = useState<number>(1);
    var [todayPassHoursPercent, setTodayPassHoursPercent] = useState<number>(1);
    var [weekDay, setWeekDay] = useState<number>(1);
    var [weekDayPassPercent, setWeekDayPassPercent] = useState<number>(1);
    var [date, setDate] = useState<number>(1);
    var [monthPassPercent, setMonthPassPercent] = useState<number>(1);
    var [month, setMonth] = useState<number>(1);
    var [yearPass, setYearPass] = useState<number>(1);
    useEffect(function () {
        function init_life_time() {
            function getAsideLifeTime() {
                /* 褰撳墠鏃堕棿鎴� */
                let nowDate = + new Date();
                /* 浠婂ぉ寮€濮嬫椂闂存埑 */
                let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
                /* 浠婂ぉ宸茬粡杩囧幓鐨勬椂闂� */
                let calcTodayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
                /* 浠婂ぉ宸茬粡杩囧幓鐨勬椂闂存瘮 */
                let calcTodayPassHoursPercent = (calcTodayPassHours / 24) * 100;
                setTodayPassHours(parseInt(String(calcTodayPassHours)));
                setTodayPassHoursPercent(parseInt(String(calcTodayPassHoursPercent)));
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
                setWeekDayPassPercent(parseInt(String(calcWeekDayPassPercent)));
                let year = new Date().getFullYear();
                let calcDate = new Date().getDate() - 1;
                let calcMonth = new Date().getMonth();
                let monthAll = new Date(year, calcMonth, 0).getDate(); // 一个月有多少天
                setDate(calcDate);
                let calcMonthPassPercent = (calcDate / monthAll) * 100;
                setMonthPassPercent(parseInt(String(calcMonthPassPercent)));
                let calcYearPass = (calcMonth / 12) * 100;
                setMonth(calcMonth);
                setYearPass(parseInt(String(calcYearPass)));
            }
            getAsideLifeTime();
            setInterval(() => {
                getAsideLifeTime();
            }, 1000);
        }
        init_life_time();
    }, [
        setTodayPassHours,
        setTodayPassHoursPercent,
        setWeekDay,
        setWeekDayPassPercent,
        setDate,
        setMonthPassPercent,
        setMonth,
        setYearPass
    ]);
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Head>
                <title>人生倒计时</title>
            </Head>
            <div className="sidebar-box classNameListBox">
                <div className="aside aside-count">
                    <div className="p-3">
                        <span style={{
                            fontSize: "1.2em",
                            color: "orange",
                            display: "inline-block"
                        }}>
                            <i className="fas fa-hourglass-half"></i></span> 人生倒计时
                    </div>
                    <div className="content">
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
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
        </>
    );
};
export default Index;