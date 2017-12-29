<template>
    <vertical-scrollbar id="home">
        <simple-column
                :showHeader="false"
                :title="'测试'"
                :icon="'fa-times'">
            <span slot="left-nav">Left</span>
            <template slot="content">
                <!--<vertical-scrollbar>-->
                <horizational-column ref="row1" :toggleItem="false" :items="items" :height=340 :width=340>
                    <template slot="toolbar">
                        <nav-header>
                            <div class="" slot="left-nav">2017-06-14</div>
                            <div @click="itemClick('row1')" class="icon-area" slot="right-nav">
                                <i class="fa fa-expand"></i>
                            </div>
                        </nav-header>
                    </template>
                </horizational-column>

                <horizational-column ref="row2" :toggleItem="false" :items="items" :height=340 :width=340>
                    <template slot="toolbar">
                        <nav-header>
                            <div class="" slot="left-nav">2017-06-10</div>
                            <div @click="itemClick('row2')" class="icon-area" slot="right-nav">
                                <i class="fa fa-expand"></i>
                            </div>
                        </nav-header>
                    </template>
                </horizational-column>

                <horizational-column ref="row3" :toggleItem="false" :items="items" :height=340 :width=340>
                    <template slot="toolbar">
                        <nav-header>
                            <div class="" slot="left-nav">2017-06-06</div>
                            <div @click="itemClick('row3')" class="icon-area" slot="right-nav">
                                <i class="fa fa-expand"></i>
                            </div>
                        </nav-header>
                    </template>
                </horizational-column>

                <horizational-column :items="items" :height=640 :width=640>
                    <template slot="toolbar">
                        <div style="margin-top: 5px; flex-grow: 1; justify-content: center">
                            <trapezoid-header :icon="'fa-bank'" :title="'Hello, World'"></trapezoid-header>
                        </div>
                    </template>
                    <!--<template slot="toolbar">-->
                    <!--<trapezoid-header :icon="'fa-bank'" :title="'Hello, World'"></trapezoid-header>-->
                    <!--</template>-->
                </horizational-column>

                <horizational-column :items="items" :height=640 :width=640>
                    <template slot="toolbar">
                        <div style="margin-top: 5px; margin-bottom: 5px; background-color: rgba(255,255, 255, .3); height: 20px; padding: 10px; flex-grow: 1">
                            123
                        </div>
                    </template>
                </horizational-column>

    <!--</vertical-scrollbar>-->
            </template>
        </simple-column>
        <!--<simple-column-->
        <!--:title="'测试'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--<template slot="content">-->
        <!--<vertical-scrollbar>-->
        <!--<horizational-column :items="items" :height=300 :width=400></horizational-column>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--</simple-column>-->
        <!--<simple-column-->
        <!--:title="'测试'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--<template slot="content">-->
        <!--<vertical-scrollbar>-->
        <!--<horizational-column :items="items" :height=300 :width=400></horizational-column>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--</simple-column>-->
        <!--<simple-column-->
        <!--:title="'测试'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--<template slot="content">-->
        <!--<vertical-scrollbar>-->
        <!--<horizational-column :items="items" :height=300 :width=400></horizational-column>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--</simple-column>-->
        <!--<simple-column-->
        <!--:title="'测试'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--<template slot="content">-->
        <!--<vertical-scrollbar>-->
        <!--<horizational-column :items="items" :height=300 :width=400></horizational-column>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--</simple-column>-->
        <!--<simple-column-->
        <!--:title="'测试'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--<template slot="content">-->
        <!--<vertical-scrollbar>-->
        <!--<horizational-column :items="items" :height=300 :width=400></horizational-column>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--</simple-column>-->
        <!--<div class="common-home">-->
        <!--<simple-column-->
        <!--:title="'标题'"-->
        <!--:icon="'fa-times'">-->
        <!--<span slot="left-nav">Left</span>-->
        <!--&lt;!&ndash;<template></template>&ndash;&gt;-->
        <!--&lt;!&ndash;</simple-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<middle-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<trapezoid-header&ndash;&gt;-->
        <!--&lt;!&ndash;:title="'标题'"&ndash;&gt;-->
        <!--&lt;!&ndash;:icon="'fa-bank'">&ndash;&gt;-->
        <!--&lt;!&ndash;</trapezoid-header>&ndash;&gt;-->

        <!--<template slot="content">-->
        <!--&lt;!&ndash;<el-button size="small" @click="openDialog({&ndash;&gt;-->
        <!--&lt;!&ndash;width: 500,&ndash;&gt;-->
        <!--&lt;!&ndash;height: 400&ndash;&gt;-->
        <!--&lt;!&ndash;})">&ndash;&gt;-->
        <!--&lt;!&ndash;弹框&ndash;&gt;-->
        <!--&lt;!&ndash;</el-button>&ndash;&gt;-->
        <!--<vertical-scrollbar>-->
        <!--<ul>-->
        <!--<li>1</li>-->
        <!--<li>2</li>-->
        <!--<li>3</li>-->
        <!--<li>4</li>-->
        <!--<li>5</li>-->
        <!--<li>6</li>-->
        <!--<li>7</li>-->
        <!--<li>8</li>-->
        <!--<li>9</li>-->
        <!--<li>10</li>-->
        <!--<li>11</li>-->
        <!--<li>12</li>-->
        <!--<li>13</li>-->
        <!--<li>14</li>-->
        <!--<li>15</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>1</li>-->
        <!--<li>2</li>-->
        <!--<li>3</li>-->
        <!--<li>4</li>-->
        <!--<li>5</li>-->
        <!--<li>6</li>-->
        <!--<li>7</li>-->
        <!--<li>8</li>-->
        <!--<li>9</li>-->
        <!--<li>10</li>-->
        <!--<li>11</li>-->
        <!--<li>12</li>-->
        <!--<li>13</li>-->
        <!--<li>14</li>-->
        <!--<li>15</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>1</li>-->
        <!--<li>2</li>-->
        <!--<li>3</li>-->
        <!--<li>4</li>-->
        <!--<li>5</li>-->
        <!--<li>6</li>-->
        <!--<li>7</li>-->
        <!--<li>8</li>-->
        <!--<li>9</li>-->
        <!--<li>10</li>-->
        <!--<li>11</li>-->
        <!--<li>12</li>-->
        <!--<li>13</li>-->
        <!--<li>14</li>-->
        <!--<li>15</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>1</li>-->
        <!--<li>2</li>-->
        <!--<li>3</li>-->
        <!--<li>4</li>-->
        <!--<li>5</li>-->
        <!--<li>6</li>-->
        <!--<li>7</li>-->
        <!--<li>8</li>-->
        <!--<li>9</li>-->
        <!--<li>10</li>-->
        <!--<li>11</li>-->
        <!--<li>12</li>-->
        <!--<li>13</li>-->
        <!--<li>14</li>-->
        <!--<li>15</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--<li>20</li>-->
        <!--<li>21</li>-->
        <!--<li>22</li>-->
        <!--<li>23</li>-->
        <!--<li>24</li>-->
        <!--<li>25</li>-->
        <!--<li>26</li>-->
        <!--<li>27</li>-->
        <!--<li>28</li>-->
        <!--<li>29</li>-->
        <!--<li>30</li>-->
        <!--<li>31</li>-->
        <!--<li>32</li>-->
        <!--<li>33</li>-->
        <!--<li>34</li>-->
        <!--<li>35</li>-->
        <!--<li>36</li>-->
        <!--<li>37</li>-->
        <!--<li>38</li>-->
        <!--<li>39</li>-->
        <!--<li>40</li>-->
        <!--<li>16</li>-->
        <!--<li>17</li>-->
        <!--<li>18</li>-->
        <!--<li>19</li>-->
        <!--</ul>-->
        <!--</vertical-scrollbar>-->
        <!--</template>-->
        <!--&lt;!&ndash;</middle-column>&ndash;&gt;-->
        <!--</simple-column>-->
        <!--</div>-->
    </vertical-scrollbar>
</template>

<script>
    import SimpleColumn from '../components/column/SimpleColumn.vue'
    import MiddleColumn from '../components/column/MiddleColumn.vue'
    import HorizationalColumn from '../components/column/HorizationalColumn.vue'
    import TrapezoidHeader from '../components/header/TrapezoidHeader.vue'
    import NavHeader from '../components/header/NavHeader.vue'
    import CommonHeader from '../components/header/CommonHeader.vue'
    import VerticalScrollbar from '../components/scrollbar/VerticalScrollbar.vue'
    import HorizontalScrollbar from '../components/scrollbar/HorizontalScrollbar.vue'

    export default {
        components: {
            SimpleColumn,
            MiddleColumn,
            TrapezoidHeader,
            VerticalScrollbar,
            NavHeader,
            CommonHeader,
            HorizationalColumn,
            HorizontalScrollbar
        },
        props: {
            title: String,
        },
        data() {

            return {
                toggggle: false,
                items: [
                    {
                        label: '1'
                    },
                    {
                        label: '2'
                    },
                    {
                        label: '3'
                    },
                    {
                        label: '4'
                    },
                    {
                        label: '5'
                    },
                    {
                        label: '6'
                    },
                    {
                        label: '7'
                    },
                    {
                        label: '8'
                    },
                ]
            }
        },
        methods: {
            itemClick(item) {
                this.$refs[item].toggleItem = !this.$refs[item].toggleItem;
            },
            openDialog(styles) {
                let dialog = document.createElement('div');
                let contentArea = document.createElement('div');
                let cancel = document.createElement('button');

                dialog.className = 'dialog-background';
                contentArea.className = 'dialog-body';
                cancel.className = 'btn-cancel';

                cancel.innerText = '取消';

                contentArea.style.width = styles.width + 'px';
                contentArea.style.height = styles.height + 'px';
                contentArea.style.marginLeft = -(styles.width / 2) + 'px';

                cancel.onclick = () => {
                    document.body.removeChild(dialog)
                };


                contentArea.appendChild(cancel);
                dialog.appendChild(contentArea);

                document.body.appendChild(dialog);

            }
        }
    }
</script>


<style lang="scss">
    #home {
        flex-direction: column;
        /*background-color: transparent;*/

        .common-header {
            background-color: transparent;
            color: #c4c4c4;
        }

        .column.simple {
            padding: 0;
            margin: 0;
            /*background-color: rgba(11, 57, 64, 0.6);*/
            background-color: transparent;

        }

        .scrollbar.horizational {
            background-color: transparent;
            /*background-color: rgba(11, 57, 64, 0.28);*/
            margin-top: 5px;
            margin-bottom: 5px;

            /*border-bottom: 1px solid gray;*/

        }

        section {
            background-color: transparent;
        }

        .column.horizational {
            background-color: transparent;
            padding: 0;

            .item {
                margin-top: 0;
                background-color: rgba(255, 255, 255, .3);
            }
        }

    }

    .common-home {
        flex-direction: row;
    }

    ul {
        flex-grow: 1;
        color: #c4c4c4;
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.4);

        li:nth-child(odd) {
            background-color: rgba(60, 213, 166, 0.4);
        }

        li {
            background-color: rgba(11, 57, 64, 0.8);
        }
    }

    .dialog-background {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        text-align: center;
        display: block;

        .dialog-body {
            position: absolute;
            left: 50%;
            margin-top: 10%;
            background-color: #c4c4c4;

            flex-direction: column;

            justify-content: flex-end;

        }

    }
</style>

