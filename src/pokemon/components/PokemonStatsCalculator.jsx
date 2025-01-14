import {useEffect, useState,} from 'react';
import PropTypes from "prop-types";
import { Unstable_NumberInput as NumberInput } from '@mui/base';

import {BarChart} from "@mui/x-charts";
import {Box, Slider, } from '@mui/material';
import {getNaturesArrayValues} from "../helpers/getNatureArrayValues.js";

export const PokemonStatsCalculator = (baseStats) => {

    const [lvl, setLvl] = useState(1);

    const [ivHp, setIvHp] = useState (15);
    const [ivAtk, setIvAtk] = useState (15);
    const [ivDef, setIvDef] = useState (15);
    const [ivAtkSp, setIvAtkSp] = useState (15);
    const [ivDefSp, setIvDefSp] = useState (15);
    const [ivSpeed, setIvSpeed] = useState (15);

    const [evHp, setEvHp] = useState (0);
    const [evAtk, setEvAtk] = useState (0);
    const [evDef, setEvDef] = useState (0);
    const [evAtkSp, setEvAtkSp] = useState (0);
    const [evDefSp, setEvDefSp] = useState (0);
    const [evSpeed, setEvSpeed] = useState (0);

    useEffect(() => {
        console.log(baseStats)
        let naturesArrayValues = getNaturesArrayValues();
    }, []);

    const handleLvlChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setLvl(newValue);
    };

    /*
    const handleEvChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setEv(newValue);
    };
    */

    const chartSetting = {
        width: 500,
        height: 200,
    };

    const dataset = [
        {
            stat: baseStats[0].base_stat,
            statName: 'HP',
        },
        {
            stat: baseStats[1].base_stat,
            statName: 'Atk',
        },
        {
            stat: baseStats[2].base_stat,
            statName: 'Def',
        },
        {

            stat: baseStats[3].base_stat,
            statName: 'AtkSp',
        },
        {

            stat: baseStats[4].base_stat,
            statName: 'DefSp',
        },
        {

            stat: baseStats[5].base_stat,
            statName: 'Vel',
        }
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'statName' }]}
                series={[{ dataKey: 'stat' , color: '#f2c304'}]}
                layout="horizontal"
                colors="#f2c304"
                {...chartSetting}
                slotProps={{
                    bar: {
                        clipPath: `inset(0px round 10px 10px 10px 10px)`,
                    },
                }}
            />

            <Slider
                value={ lvl }
                onChange={ handleLvlChange }
                valueLabelDisplay="auto"
                min={1}
                max={100}
                aria-labelledby="input-lvl-number"
            />

            <NumberInput
                aria-label="IV HP input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivHp}
                onChange={(event, val) => setIvHp(val)}
            />

            <NumberInput
                aria-label="IV Atk input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivAtk}
                onChange={(event, val) => setIvAtk(val)}
            />

            <NumberInput
                aria-label="IV Def input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivDef}
                onChange={(event, val) => setIvDef(val)}
            />

            <NumberInput
                aria-label="IV AtkSp input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivAtkSp}
                onChange={(event, val) => setIvAtkSp(val)}
            />

            <NumberInput
                aria-label="IV DefSp input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivDefSp}
                onChange={(event, val) => setIvDefSp(val)}
            />

            <NumberInput
                aria-label="IV Speed input"
                placeholder="0 to 31"
                min={0}
                max={31}
                value={ivSpeed}
                onChange={(event, val) => setIvSpeed(val)}
            />

            <NumberInput
                aria-label="EV HP input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evHp}
                onChange={(event, val) => setEvHp(val)}
            />

            <NumberInput
                aria-label="EV Atk input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evAtk}
                onChange={(event, val) => setEvAtk(val)}
            />

            <NumberInput
                aria-label="EV Def input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evDef}
                onChange={(event, val) => setEvDef(val)}
            />

            <NumberInput
                aria-label="EV AtkSp input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evAtkSp}
                onChange={(event, val) => setEvAtkSp(val)}
            />

            <NumberInput
                aria-label="EV DefSp input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evDefSp}
                onChange={(event, val) => setEvDefSp(val)}
            />

            <NumberInput
                aria-label="EV Speed input"
                placeholder="0 to 252"
                min={0}
                max={252}
                value={evSpeed}
                onChange={(event, val) => setEvSpeed(val)}
            />

        </Box>

    );
};

PokemonStatsCalculator.propTypes = {
    baseStats: PropTypes.array
};
