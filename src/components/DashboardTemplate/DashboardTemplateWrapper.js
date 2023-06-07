import styled from "styled-components";


const DashboardTemplateWrapper = styled.section `

display: flex;
height: 100vh;
aside{
    background-color: white;
    width: 400px;
    position: sticky;
    top: 0;
    .express-img-box {
        padding: 30px 50px !important;
        img{
            max-width: 100%;
        }
    }
    .list-group{
        
        .list-group-item{
            border-radius: 10px;
            border: none;
            margin-bottom: 10px;
            padding: 0;
           
            a{
                text-decoration: none;
                padding: 10px 20px;
                color: black;
                display: block;
                gap: 10px;
                
                &.active{
                background-color: yellow;
            }

                .icon-box{
                    font-size: 25px;
                    color: rgb(114, 114, 114);
                }

                .link-box{
                    p{
                        margin: 0 !important;
                    }
                    span{
                        margin: 0 !important;
                        font-size: 13px;
                        color: rgb(114, 114, 114);
                    }
                }
            }
        }
    }
}
.rightside{
    flex: 1;
    max-height: 100vh;
    overflow: auto;
    header{
        position: sticky;
        top: 0;
        z-index: 1000;
        background-color: white;

        p{
            cursor: pointer;

        }

        .axror{
            padding: 0px !important;
            margin: 0px !important;
            img{
                max-height: 54px !important;

            }
        }


    }
    main{

        .arizlar-tex-box{
            width: 100%;
            padding: 0px;
        }

        .table{
            padding: 20px !important;
        }
    }
}

`;

export default DashboardTemplateWrapper